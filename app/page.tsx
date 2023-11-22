// import SignupForm from "@/components/shared/SignupForm";
import FormTable from "@/components/shared/FormTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <SignupForm /> */}
      <Link href="/todos">
        <Button>Payment page</Button>
      </Link>
      <FormTable />
    </main>
  );
}
