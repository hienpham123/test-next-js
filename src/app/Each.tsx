import React, { ReactNode } from "react";

// Sử dụng generics để xác định kiểu dữ liệu của mỗi item trong mảng
type EachProps<T> = {
    render: (item: T, index: number) => ReactNode;
    of: T[];
};

// Sử dụng generics để đặt kiểu dữ liệu cho component Each
export const Each = <T,>({ render, of }: EachProps<T>) => {
    const elements = of.map((item, index) => render(item, index));

    return <React.Fragment>{elements}</React.Fragment>;
};
