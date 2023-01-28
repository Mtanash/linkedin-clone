interface IOverlaySpinner {
  isLoading: boolean;
}

const OverlaySpinner = ({ isLoading = false }: IOverlaySpinner) => {
  if (!isLoading) return <></>;
  return (
    <div className="absolute inset-0 bg-[#0000004d] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-[5px] border-white border-l-transparent animate-spin"></div>
    </div>
  );
};

export default OverlaySpinner;
