type EducationCardProps = {
  icon: React.ReactNode;
  title: string;
  institution: string;
  period: string;
}

function EducationCard({ icon, title, institution, period }: EducationCardProps) {
  return (
    <div className="flex flex-col gap-6 p-4 text-body border rounded-sm sm:w-125 text-center justify-between">
      <div className="flex flex-col gap-4 items-center">
        {icon}
        <h3 className="text-title font-bold text-2xl">{title}</h3>
        <p>{institution}</p>
      </div>
      <p className="text-brand font-bold">{period}</p>
    </div>
  )
}

export default EducationCard