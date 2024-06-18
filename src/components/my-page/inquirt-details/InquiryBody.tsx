'use client';
import { InquiryContent } from "@/constants/my-page/datagrid";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const InquiryBody = ({ children, id }: {
    children: React.ReactNode,
    id: number,
}) => {

    const router = useRouter();
  
      
    return (<>
        <tr
            onClick={() => { router.push(`/board/${id}`); }}
            key={id}
            className="datagrid_body_tr">
            {children}
        </tr>
    </>);
}
export default InquiryBody;