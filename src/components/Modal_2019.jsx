import Map_2019 from "./Map_2019";

function Modal_2019() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Map_2019 />
      <p>
        اقرأ عن جميع الأحداث التي أنشأتها عديلة في هذا العام ، انقر فوق المناطق
        البيضاء لمعرفة المزيد حول كل حدث في تلك المنطقة المحددة
      </p>
    </div>
  );
}

export default Modal_2019;
