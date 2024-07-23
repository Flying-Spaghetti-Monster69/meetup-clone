import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const page = () => {
  return (
    <main className="h-screen flex items-center justify-center bg-foreground">
      <Card className="w-[350px] bg-foreground">
        <CardHeader>
          <CardTitle className="text-white">Create Memories</CardTitle>
          <CardDescription>
            Get into the community of your dreams
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-white">
                  First Name
                </Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-white">
                  Last name
                </Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Name of your project"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col ">
          <div className="flex justify-between w-full">
            <Link href={"/"}>
              <Button variant="default" className="">
                Cancel
              </Button>
            </Link>
            <Button type="submit" variant="outline" className="">
              login
            </Button>
          </div>
          <p className="text-white text-sm pt-4">
            Haven't registered yet?{" "}
            <Link href={"/register"} className="text-cyan-500 underline">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
};
export default page;
