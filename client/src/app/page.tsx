import Image from "next/image";

export  default async function  Home() {
  const API = process.env.BACKEND_URL
  const  response = await fetch(`${API}/products`)
  const products =  await response.json()

  console.log(products)

  return (
    <div >
      <h1>Prodctos</h1>
      {products.map((product: any) => (
        <div key={product.id}>
            <h2>{product.name}</h2>
            <Image src={product.imageUrl} alt={product.name} width={300} height={300} />
        </div>
      ))}
      
    </div>
  );
}
