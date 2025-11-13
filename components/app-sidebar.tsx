import * as React from "react"

import { SearchForm } from "@/components/search-form"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { getNotebooks } from "@/server/notebook"
import Image from "next/image"
import SidebarData from "@/components/sidebar-data"
import { Suspense } from "react"

// This is sample data.

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const notebooks = await getNotebooks()
  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
      ...(notebooks.notebooks?.map((notebook)=>({
        title: notebook.name,
        url: `/dashboard/${notebook.id}`,
        items: notebook.notes.map((note)=>({
          title: note.title,
          url: `/dashboard/notebook/${notebook.id}/note/${note.id}`,
        })),
      })) ?? []),
    ],
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex flex-col gap-6 pt-4"> 
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo-fai.png"
            alt="logo"
            width={120}
            height={30}
          />
          <h1 className="font-medium text-xl tracking-wider">Fai&apos;s Data</h1>
        </div>
        <Suspense>
          <SearchForm />
        </Suspense>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <Suspense>
          <SidebarData data={data} />
        </Suspense>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}