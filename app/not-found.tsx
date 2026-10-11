import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-soft">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg">Page not found</h1>
      <p className="mt-4 text-muted">The page you are looking for doesn&apos;t exist.</p>
      <div className="mt-8 flex justify-center">
        <Button href="/">Back home</Button>
      </div>
    </Container>
  );
}
