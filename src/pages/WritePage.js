import { TextField } from "@mui/material";

export default function WritePage() {
  return (
    <>
      <div className="flex-1 flex  p-10 flex-col gap-7">
        <TextField label="언제 해야하나요 ?" focused type ="datetime-local"/>

        <TextField label="안녕하세요" className="flex-1 flex multiline"/>
      </div>
    </>
  );
}