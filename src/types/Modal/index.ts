export interface ModalProps {
	getRef?: (ref: { open: (t?: string) => void; close: () => void }) => void;
	onConfirm?: () => void;
}
