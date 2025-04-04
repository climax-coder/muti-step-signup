interface FormLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const FormLayout = ({
  title = "Form Step",
  children,
}: FormLayoutProps) => {
  return (
    <div className="bg-white w-full max-w-[800px] min-h-[300px] px-10 py-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
      {children}
    </div>
  );
};
