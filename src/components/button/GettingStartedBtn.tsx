import { PG } from "@/constants/enums/API"
import Link from "next/link"

export const GettingStartedBtn = () => {
    return (
        <>
            <Link href={`${PG.LOGIN}`}
                className="gettingStarted_btn ">
                토익두잇 시작하기
            </Link>
        </>);
}