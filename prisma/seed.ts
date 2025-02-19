import prisma from '../src/app/api/lib/prisma';

async function main() {
   const provinces = [
      { name: 'Azua' },
      { name: 'Bahoruco' },
      { name: 'Barahona' },
      { name: 'Dajabón' },
      { name: 'Distrito Nacional' },
      { name: 'Duarte' },
      { name: 'Elías Piña' },
      { name: 'El Seibo' },
      { name: 'Espaillat' },
      { name: 'Hato Mayor' },
      { name: 'Hermanas Mirabal' },
      { name: 'Independencia' },
      { name: 'La Altagracia' },
      { name: 'La Romana' },
      { name: 'La Vega' },
      { name: 'María Trinidad Sánchez' },
      { name: 'Monseñor Nouel' },
      { name: 'Monte Cristi' },
      { name: 'Monte Plata' },
      { name: 'Pedernales' },
      { name: 'Peravia' },
      { name: 'Puerto Plata' },
      { name: 'Samaná' },
      { name: 'San Cristóbal' },
      { name: 'San José de Ocoa' },
      { name: 'San Juan' },
      { name: 'San Pedro de Macorís' },
      { name: 'Sánchez Ramírez' },
      { name: 'Santiago' },
      { name: 'Santiago Rodríguez' },
      { name: 'Santo Domingo' },
      { name: 'Valverde' },
   ];

   await prisma.state.createMany({
      data: provinces,
      skipDuplicates: true, // Evita duplicados si el seed se ejecuta varias veces
   });

   console.log('Provincias insertadas correctamente.');
}

main()
   .catch((e) => {
      console.error(e);
      process.exit(1);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });
