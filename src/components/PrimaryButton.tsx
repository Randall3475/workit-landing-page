type PrimaryButtonProps = {
  text: string;
};
export default function PrimaryButton({ text }: PrimaryButtonProps) {
  return (
    <>
      <button className="bg-pr-green font-body text-pr-purple font-bold text-body border-2 border-pr-green px-6 py-2 transition-colors hover:bg-pr-purple hover:text-pr-green">
        {text}
      </button>
    </>
  );
}
