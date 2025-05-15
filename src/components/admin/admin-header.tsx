import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

export default function AdminHeader() {
  return (
    <header className="bg-background z-1 sticky top-0 flex h-14 items-center gap-4 border-b pr-4 sm:pr-6">
      <SidebarTrigger className="rounded-t-none rounded-b-none" />

      <div className="ml-auto flex items-center gap-2 sm:gap-4">
        <Button variant={"outline"}>
          Sign Out
        </Button>
      </div>
    </header>
  )
}