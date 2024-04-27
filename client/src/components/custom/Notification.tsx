import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Notification = ({ message }) => {
  return (
    <Alert>
      <AlertTitle>Bin is full</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default Notification;
