import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => (
  <main className="flex flex-col gap-6 px-2 sm:px-4 py-4">
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-3xl sm:text-4xl">Settings</h2>
      <p className="text-sm sm:text-base">
        Hi Victony Darey, it’s good to have you here, we are committed to
        impacting and monitoring your progress.
      </p>
    </div>

    <div className="w-full">
      <Tabs className="overflow-x-auto">
        <TabsList
          defaultValue="profile"
          className="gap-3 *:px-8 overflow-x-auto"
        >
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-red data-[state=active]:text-popover"
          >
            Your profile
          </TabsTrigger>
          <TabsTrigger
            value="payment"
            className="data-[state=active]:bg-red data-[state=active]:text-popover"
          >
            Payment
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="data-[state=active]:bg-red data-[state=active]:text-popover"
          >
            Change password
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="payment">Change your password here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  </main>
);

export default Settings;
