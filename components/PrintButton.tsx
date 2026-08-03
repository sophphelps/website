export function PrintButton() {
  return (
    <a
      href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Sophia_Phelps_CV.pdf`}
      download="Sophia_Phelps_CV.pdf"
      className="button-primary no-print"
    >
      Download CV
    </a>
  );
}
