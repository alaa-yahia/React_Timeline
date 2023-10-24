import React from "react";
import Map_2020 from "./Map_2020";

export default function Modal_2020() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Map_2020 />
      <p>
        اقرأ عن جميع الأحداث التي أنشأتها عديلة في هذا العام ، انقر فوق المناطق
        البيضاء لمعرفة المزيد حول كل حدث في تلك المنطقة المحددة
      </p>
    </div>
  );
}
