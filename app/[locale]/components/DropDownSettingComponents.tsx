"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname,useRouter } from "next/navigation";
interface DropDownProps {
  settings: string;
  language: string;
  en: string;
  cz: string;
  dark:string;
  light:string;
  themeText:string;
}

function DropDownSettingComponents({ settings, language, en, cz,dark,light,themeText }: DropDownProps) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname(); // Get the current path
  const router = useRouter();

  const changeLanguage = (newLang: string) => {
    // Split the current pathname into segments and remove the first two
    const path = pathname.split("/").slice(2).join("/")
    router.push(`/${newLang}/${[path]}`)
  };
  
  
  // Ensure component is only rendered after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering until mounted

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Settings />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>{settings}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>{language}</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={() => changeLanguage("en")} >
                    {en}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage("cz")}>
                    {cz}
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>{themeText}</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={() => setTheme("light")}>{light}</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>{dark}</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropDownSettingComponents;
