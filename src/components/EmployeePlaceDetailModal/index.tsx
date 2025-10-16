import { Button, Modal } from "antd";

const EmployeePlaceDetailModal = ({ item, isModalOpen, setIsModalOpen }) => {
  function hexToRgba(hex, alpha = 1) {
    if (!hex) return "";
    hex = hex.replace("#", "");

    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((x) => x + x)
        .join("");
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  const colorFromDb = item?.name || "#2d78e0";

  return (
    <Modal
      title=""
      centered
      open={isModalOpen}
      footer={null}
      onCancel={() => setIsModalOpen && setIsModalOpen(false)}
      width={480}
    >
      <h1 className="text-xl font-bold">{item?.employeeName}</h1>

      <div className="w-full flex flex-col gap-4 mt-7">
        {/* Lavozim */}
        <div className="flex flex-col">
          <span className="text-base font-normal text-gray-500">Lavozim</span>
          <h1 className="text-base font-medium">{item?.machineName}</h1>
        </div>

        {/* Bo'lim */}
        <div className="flex flex-col">
          <span className="text-base font-normal text-gray-500">Bo'lim</span>
          <div
            className="flex w-fit items-center gap-2 py-1 px-3 rounded-2xl"
            style={{
              backgroundColor: hexToRgba(colorFromDb, 0.3),
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: hexToRgba(colorFromDb),
              }}
            ></div>
            <h1
              className="text-base font-medium"
              style={{ color: hexToRgba(colorFromDb) }}
            >
              {item?.resourseName}
            </h1>
          </div>
        </div>

        {/* O'tirish joyi */}
        <div className="flex flex-col">
          <span className="text-base font-normal text-gray-500">
            O'tirish joyi
          </span>
          <h1 className="text-2xl font-bold">{item?.resourseCode}</h1>
        </div>

        {/* Close button */}
        <Button
          type="primary"
          className="!w-20 !py-5 !rounded-xl !font-semibold !self-end !mt-2"
          onClick={() => setIsModalOpen && setIsModalOpen(false)}
        >
          Yopish
        </Button>
      </div>
    </Modal>
  );
};

export default EmployeePlaceDetailModal;
