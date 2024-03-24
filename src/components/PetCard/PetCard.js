import './PetCard.css';

export function PetCard({title , src}) {
  return (
    <div className="PetCard">
      <div className='img-wrapper'>
        <img src={src} className='pet' />
      </div>

      <div className='title'>{title}</div>
    </div>
  );
}

