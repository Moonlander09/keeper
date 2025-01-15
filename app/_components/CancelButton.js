import Link from 'next/link'; 

function CancelButton() {
  return (
    <Link href="/">
      <button className="btn-submit">
        Cancel
      </button>
    </Link>
  );
}

export default CancelButton;
