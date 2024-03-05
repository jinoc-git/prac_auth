import SwitchThemeButton from '@/components/buttons/switchTheme/SwitchThemeButton';
import SignupForm from '@/components/signupForm/SignupForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SwitchThemeButton />
      <SignupForm />
    </main>
  );
}
