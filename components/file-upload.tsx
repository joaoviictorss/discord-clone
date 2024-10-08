"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";

import { Button } from "@/components/ui/button";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative size-20">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <Button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white size-6 p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="size-4" />
        </Button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};

export default FileUpload;
