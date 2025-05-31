import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button'; // Assuming you have a Button component

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={cycleTheme}>
      {theme === 'light' && <Sun className="h-[1.2rem] w-[1.2rem]" />}
      {theme === 'dark' && <Moon className="h-[1.2rem] w-[1.2rem]" />}
      {theme === 'system' && <Monitor className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
