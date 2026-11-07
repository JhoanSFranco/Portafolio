import { memo, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LANGUAGE_OPTIONS } from '../../constants';
import './LanguageSelector.css';

type LanguageValue = (typeof LANGUAGE_OPTIONS)[number]['value'];

/* Inline SVG flags: render the same on every OS (Windows has no flag emojis). */
const Flag = ({ code }: { code: LanguageValue }) => {
  switch (code) {
    case 'fr':
      return (
        <svg viewBox="0 0 3 2" aria-hidden="true">
          <rect width="1" height="2" fill="#002395" />
          <rect x="1" width="1" height="2" fill="#fff" />
          <rect x="2" width="1" height="2" fill="#ED2939" />
        </svg>
      );
    case 'es':
      return (
        <svg viewBox="0 0 3 2" aria-hidden="true">
        <rect width="3" height="1" fill="#FCD116" />
        <rect y="1" width="3" height="0.5" fill="#003893" />
        <rect y="1.5" width="3" height="0.5" fill="#CE1126" />
      </svg>
      );
    default:
      return (
        <svg viewBox="0 0 19 10" aria-hidden="true">
          <rect width="19" height="10" fill="#B22234" />
          {[1, 3, 5, 7, 9].map((y) => (
            <rect key={y} y={(y * 10) / 13} width="19" height={10 / 13} fill="#fff" />
          ))}
          <rect width="7.6" height={(10 * 7) / 13} fill="#3C3B6E" />
        </svg>
      );
  }
};

interface LanguageSelectorProps {
  onChange?: () => void;
}

const LanguageSelector = memo(({ onChange }: LanguageSelectorProps) => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLLIElement | null>>([]);

  const current =
    LANGUAGE_OPTIONS.find((option) => option.value === language) ?? LANGUAGE_OPTIONS[0];

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  // Focus the active option while open
  useEffect(() => {
    if (isOpen) optionRefs.current[activeIndex]?.focus();
  }, [isOpen, activeIndex]);

  const open = () => {
    setActiveIndex(LANGUAGE_OPTIONS.findIndex((o) => o.value === current.value));
    setIsOpen(true);
  };

  const close = (returnFocus = true) => {
    setIsOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  };

  const select = (value: LanguageValue) => {
    if (value !== language) {
      changeLanguage(value);
      onChange?.();
    }
    close();
  };

  const handleButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
      event.preventDefault();
      open();
    }
  };

  const handleListKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const last = LANGUAGE_OPTIONS.length - 1;
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex((i) => (i >= last ? 0 : i + 1));
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex((i) => (i <= 0 ? last : i - 1));
        break;
      case 'Home':
        event.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setActiveIndex(last);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        select(LANGUAGE_OPTIONS[activeIndex].value);
        break;
      case 'Escape':
        event.preventDefault();
        close();
        break;
      case 'Tab':
        close(false);
        break;
    }
  };

  return (
    <div className={`language-selector${isOpen ? ' is-open' : ''}`} ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="language-selector__trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Select language, current: ${current.label}`}
        onClick={() => (isOpen ? close() : open())}
        onKeyDown={handleButtonKeyDown}
      >
        <span className="language-selector__flag">
          <Flag code={current.value} />
        </span>
        <span className="language-selector__code">{current.code}</span>
        <span className="language-selector__chevron" aria-hidden="true" />
      </button>

      <ul
        className="language-selector__menu"
        role="listbox"
        aria-label="Languages"
        aria-activedescendant={isOpen ? `lang-${LANGUAGE_OPTIONS[activeIndex].value}` : undefined}
        onKeyDown={handleListKeyDown}
        hidden={!isOpen}
      >
        {LANGUAGE_OPTIONS.map((option, index) => {
          const isSelected = option.value === current.value;
          return (
            <li
              key={option.value}
              id={`lang-${option.value}`}
              ref={(el) => {
                optionRefs.current[index] = el;
              }}
              role="option"
              tabIndex={-1}
              aria-selected={isSelected}
              className={`language-selector__option${isSelected ? ' is-selected' : ''}`}
              onClick={() => select(option.value)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <span className="language-selector__flag">
                <Flag code={option.value} />
              </span>
              <span className="language-selector__code">{option.code}</span>
              <span className="language-selector__label">{option.label}</span>
              <svg className="language-selector__check" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

LanguageSelector.displayName = 'LanguageSelector';

export default LanguageSelector;
