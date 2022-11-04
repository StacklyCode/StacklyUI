import { css } from '@emotion/react';
import { AtomButton, AtomIcon } from 'components/atoms';
import { colorIcon } from 'css';
import { useAtomValue } from 'jotai';
import { ThemeToggleAtom } from 'jotais/theme';
import changeBrightness from 'utils/changeBrightness';
import isBackDark from 'utils/isBackDark';

const ICONS = {
  light:
    'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/icons/light.svg',
  dark: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/STCO-0001/icons/dark.svg'
};

const ToggleTheme = () => {
  const [key, toggle] = useAtomValue(ThemeToggleAtom);
  return (
    <AtomButton
      onClick={() => toggle()}
      css={(theme) => css`
        position: fixed;
        top: 30px;
        right: 30px;
        width: max-content;
        padding: 10px 30px;
        border-radius: 30px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.048);
        border: 1px solid ${theme?.general?.properties?.tooltip};
        background-color: ${key === 'light'
          ? theme?.general?.color?.primary
          : theme?.general?.properties?.tooltip};
        :hover {
          background-color: ${key === 'light'
            ? changeBrightness(theme?.general?.color?.primary, -10)
            : changeBrightness(theme?.general?.properties?.tooltip, -10)};
          border: 1px solid ${theme?.general?.properties?.tooltip};
        }
        z-index: 9999;
      `}
    >
      <AtomIcon
        css={(theme) => css`
          width: 20px;
          height: 20px;
          ${colorIcon(
            isBackDark(
              key === 'light'
                ? theme?.general?.color?.primary
                : theme?.general?.properties?.tooltip
            )
          )}
        `}
        icon={ICONS[key] ?? ICONS.light}
      />
    </AtomButton>
  );
};

export default ToggleTheme;
