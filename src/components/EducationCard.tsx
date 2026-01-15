type EducationCardProps = {
    icon : React.ReactNode;
    title: string;
    institution: string;
    period: string;
}

function EducationCard({ icon, title, institution, period }: EducationCardProps) {
  return (
    <div className="flex flex-col gap-6 p-4 text-body border rounded-sm w-70 text-center">
        {icon}
        <h3 className="text-title font-bold text-2xl">{title}</h3>
        <p>{institution}</p>
        <p className="text-brand font-bold">{period}</p>
    </div>
  )
}

export default EducationCard