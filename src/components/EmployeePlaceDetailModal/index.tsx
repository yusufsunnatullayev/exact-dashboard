import { Button, Modal } from "antd";

const EmployeePlaceDetailModal = ({ item, isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title=""
      closable={{ "aria-label": "Custom Close Button" }}
      centered
      open={isModalOpen}
      footer={null}
      onCancel={() => setIsModalOpen && setIsModalOpen(false)}
      width={480}
    >
      <h1 className="text-xl font-bold">{item?.name}</h1>
      <div className="w-full flex flex-col gap-4 mt-7">
        <div className="flex flex-col">
          <span className="text-base font-normal text-gray-500">Lavozim</span>
          <h1 className="text-base font-medium">{item?.position}</h1>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-normal text-gray-500">Bo'lim</span>
          <div
            className="flex w-fit items-center gap-2 py-1 px-3 rounded-2xl"
            style={{ backgroundColor: item?.color1 }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item?.color2 }}
            ></div>
            <h1
              className="text-base font-medium"
              style={{ color: item?.color2 }}
            >
              {item?.section}
            </h1>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-normal text-gray-500">
            O'tirish joyi
          </span>
          <h1 className="text-2xl font-bold">{item?.seat}</h1>
          <span className="text-sm font-normal text-gray-500">
            Qator 1, Bo'lim A
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-normal text-gray-500">
            Smena ma'lumotlari
          </span>
          <span className="text-base font-normal">{item?.shift_info}</span>
        </div>
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
