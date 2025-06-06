type Props = {
  label: string;
  body: React.ReactNode;
};

export default function InfoBlock({ label, body }: Props) {
  return (
    <div className="space-y-1">
      <span className="text-sm text-gray-500">{label}:</span>

      <br />

      <span className="text-lg">{body}</span>
    </div>
  );
}
