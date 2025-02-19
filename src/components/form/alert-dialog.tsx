import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import { PiCheckCircleBold, PiWarningCircle } from 'react-icons/pi';

interface AlertProps {
   title: string;
   description: string;
   isOpen: boolean;
   onClose: () => void;
   onAccept: () => void;
}

export const AlertDiag = (props: AlertProps) => {
   const { isOpen } = props;

   const onCancel = () => {
      props.onClose();
   };

   const onAccept = () => {
      props.onAccept();
   };

   return (
      <AlertDialog open={isOpen}>
         <AlertDialogContent className="bg-white/90 border-2 border-red-800 rounded-3xl text-red-800">
            <AlertDialogHeader className="leading-none">
               <AlertDialogTitle className="flex flex-row gap-2 items-center text-semibold">
                  <PiWarningCircle /> {props.title}
               </AlertDialogTitle>
               <AlertDialogDescription className="text-gray-800">
                  {props.description}
               </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="text-semibold">
               <AlertDialogCancel
                  onClick={onCancel}
                  className="rounded-xl hover:bg-red-800/75 hover:text-white"
               >
                  No
               </AlertDialogCancel>
               <AlertDialogAction
                  onClick={onAccept}
                  className="flex flex-row items-center gap-2 rounded-xl border border-red-800 hover:bg-red-800 hover:text-white"
               >
                  <PiCheckCircleBold /> Si
               </AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
};
