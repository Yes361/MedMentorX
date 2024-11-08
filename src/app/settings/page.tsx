'use client'

import { Input, Button, Switch, Avatar, Divider } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function SettingsPage() {
  const { data: session } = useSession();
  const [name, setName] = useState(session?.user?.name || '');
  const [email, setEmail] = useState(session?.user?.email || '');
  const [newPassword, setNewPassword] = useState('');

  const handleSaveProfile = () => {
    // Logic for updating profile
    console.log("Profile saved:", { name, email });
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8">Account Settings</h1>

      {/* Profile Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <div className="flex items-center gap-4 mb-4"> 
            {/*define default avatar later*/}
            <Avatar
                src={session?.user?.image || "/default-avatar.png"} 
                alt="Profile Picture"
                size="lg"
                className="border border-gray-300"
            />  
            <Button color="primary">
                Change Avatar
            </Button>
        </div>
        <Input
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="mb-4"
        />
        <Input
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="mb-4"
          disabled
        />
        <Button color="primary" onClick={handleSaveProfile}>
          Save Profile
        </Button>
      </section>
    </div>
  );
}
