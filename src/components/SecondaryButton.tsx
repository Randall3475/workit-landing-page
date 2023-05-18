type SecondaryButtonProps = {
  text: string;
};
export default function SecondaryButton({ text }: SecondaryButtonProps) {
  return (
    <>
      <button className="font-bold font-body text-white underline decoration-[.185rem] decoration-pr-green underline-offset-8 transition-colors hover:text-pr-green">
        {text}
      </button>
    </>
  );
}
