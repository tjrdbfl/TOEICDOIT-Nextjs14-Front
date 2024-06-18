type InquiryColumnsType = {
    "id": number;
    "title": string;
    "order":boolean;
}
export const InquiryColumns: InquiryColumnsType[] = [
    {
        id: 0,
        title: "id",
        order: true,
    },
    {
        id: 1,
        title: "문의 제목",
        order: false,
    },
    {
        id: 2,
        title: "날짜",
        order: true,
    },
    {
        id: 3,
        title: "상태",
        order: false,
    },
];
type InquiryContentType = {
    "id": number;
    "title":string;
    "date":string;
    "state":boolean;
}
export const InquiryContent:InquiryContentType[]=[
    {
        id: 1,
        title: "안녕하세요.. 물어볼게 있어요..",
        date:  "2024-02-01",
        state: false
    },
    {
        id: 2,
        title: "안녕하세요.. 물어볼게 있어요..",
        date:  "2024-02-01",
        state: true
    },
    {
        id: 3,
        title: "안녕하세요.. 물어볼게 있어요..",
        date:  "2024-02-01",
        state: true
    },
    {
        id: 4,
        title: "안녕하세요.. 물어볼게 있어요..",
        date:  "2024-02-01",
        state: false
    },
    {
        id: 5,
        title: "안녕하세요.. 물어볼게 있어요..",
        date:  "2024-02-01",
        state: false
    },
];

