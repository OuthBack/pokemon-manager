interface Props {
  children: string;
}

export function Version({ children }: Props) {
  return (
    <>
      <span>{children}</span>
    </>
  );
}
