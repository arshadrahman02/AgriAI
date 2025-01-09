import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { toast } from "sonner";
import { User, UserPlus, UserMinus } from "lucide-react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          toast.error("Error fetching users");
          console.error("Error fetching users:", error);
          throw error;
        }

        setUsers(data);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (
    userId: string,
    newRole: "user" | "instructor" | "admin"
  ) => {
    try {
      // Check if user already has a role
      const { data: existingRoles, error: roleError } = await supabase
        .from("user_roles")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (roleError) {
        toast.error("Error checking user roles");
        console.error("Error checking user roles:", roleError);
        throw roleError;
      }

      if (existingRoles) {
        // Update existing role
        const { error: updateError } = await supabase
          .from("user_roles")
          .update({ role: newRole })
          .eq("user_id", userId);

        if (updateError) {
          toast.error(`Error updating user role`);
          console.error(`Error updating user role:`, updateError);
          throw updateError;
        }
      } else {
        // Insert new role
        const { error: insertError } = await supabase
          .from("user_roles")
          .insert({ user_id: userId, role: newRole });

        if (insertError) {
          toast.error(`Error assigning user role`);
          console.error(`Error assigning user role:`, insertError);
          throw insertError;
        }
      }

      toast.success(`User role successfully updated to ${newRole}`);
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error("An unexpected error occurred:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <Table>
        <TableCaption>List of all users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.created_at}</TableCell>
              <TableCell>
                {user.user_roles?.[0]?.role || "user"}
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleRoleChange(user.id, "instructor")}
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Instructor
                  </Button>
                  <Button
                    onClick={() => handleRoleChange(user.id, "admin")}
                    className={buttonVariants({ variant: "default" })}
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Admin
                  </Button>
                  <Button
                    onClick={() => handleRoleChange(user.id, "user")}
                    className={buttonVariants({ variant: "destructive" })}
                  >
                    <UserMinus className="h-4 w-4 mr-2" />
                    Demote
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagement;
