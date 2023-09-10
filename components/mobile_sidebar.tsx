"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Sidebar } from "./sidebar";

export default function MobileSidebar() {
  return (
    <Sheet>
      {/* mobile button */}
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      {/* sidebar */}
      <SheetContent side="left" className="p-0 overflow-y-scroll">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
