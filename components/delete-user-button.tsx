"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteUser } from "@/server/users";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react";
   
type TipeDataIdUserTsbDiDb = {
  userId: string;
}

export default function DeleteUserButton({ userId }: TipeDataIdUserTsbDiDb) { 
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    try {
      setIsLoading(true)
      await deleteUser(userId)
      toast.success("penghapusan data santri berhasil")
      setIsOpen(false)
      router.refresh()
    } catch (error) {
      console.error("Error deleting user:", error)
      toast.error("Terjadi kesalahan saat menghapus data santri")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogTrigger asChild>
    <Button variant="ghost">
        <Trash2 className="size-4"/>
    </Button>   
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
      <Button
      variant="destructive"
      disabled={isLoading}
        onClick={handleDelete}
      >
        {isLoading?<Loader2 className="size-4 animate-spin" /> : "Delete User"}
      </Button>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}
