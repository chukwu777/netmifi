import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn, splitCamelCaseToWords } from "@/lib/utils";
import { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";

const CustomRichTextEditor = ({
  form,
  control,
  name,
  defaultValue,
  hidden = false,
  isNotLabeled = false,
  className = "",
  config,
}: CustomRichTextEditorProps) => {
  const [model, setModel] = useState("");
  const handleModelChange = (event) => {
    setModel(event);
  };
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem className={cn({ "form-item": !hidden })} hidden={hidden}>
          <div
            className={cn({
              "form-field": !isNotLabeled,
              "unlabeled-form-field": isNotLabeled,
              filled: !isNotLabeled && field.value,
            })}
            // className="flex w-full gap-1 flex-col bg-secondary ring-2 ring-secondary rounded-lg p-2 focus-within:ring-destructive focus-within:bg-primary-foreground"
          >


            <FormControl>
              <FroalaEditor
                tag="textarea"
                config={config}
                model={model}
                onModelChange={handleModelChange}
              />
            </FormControl>
          </div>
          <FormMessage className="form-message" />
        </FormItem>
      )}
    />
  );
};

export default CustomRichTextEditor;