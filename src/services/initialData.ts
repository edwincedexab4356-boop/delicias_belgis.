import { Producto, ConfiguracionNegocio, InventarioItem, Venta, Gasto, ProduccionRegistro } from '../types';

export const INITIAL_CONFIGURACION: ConfiguracionNegocio = {
  nombre: 'Delicias Belgi',
  descripcion: 'Heladería, dulcería y repostería artesanal en Ciudad de Colón.',
  telefono: '6797-9141',
  direccion: 'Ciudad de Colón, Calle 2 ave. Bolívar, PH Bahía Limón',
  whatsapp: '50767979141',
  moneda: 'USD',
  instagram: 'https://www.instagram.com/dulzurasdebelgis/?hl=es-la',
  googleMaps: 'https://maps.app.goo.gl/cpq63XcE3vPFfuRz5',
  paraLlevar: true,
  aDomicilio: true,
  horarios: {
    lunes: { activo: true, apertura: '09:00', cierre: '19:30' },
    martes: { activo: true, apertura: '09:00', cierre: '19:30' },
    miercoles: { activo: true, apertura: '09:00', cierre: '19:30' },
    jueves: { activo: true, apertura: '09:00', cierre: '19:30' },
    viernes: { activo: true, apertura: '09:00', cierre: '19:30' },
    sabado: { activo: true, apertura: '09:00', cierre: '19:30' },
    domingo: { activo: false, apertura: '09:00', cierre: '19:30' },
  },
  logoUrl: '',
  heroImagen: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=85',
  heroTitulo: 'El sabor artesanal que alegra tus mejores momentos',
  heroSubtitulo: 'En Delicias Belgi creamos bolis gourmet, helados cremosos, postres y dulcería preparada con amor e ingredientes de primera calidad en Ciudad de Colón.',
  presentacionTexto: 'Somos una heladería, dulcería y repostería artesanal en Colón. Elaboramos postres con recetas únicas, ingredientes frescos y entrega rápida a domicilio.',
  contactoTexto: 'Visítanos en PH Bahía Limón o solicita tus postres favoritos para llevar y con entrega a domicilio.',
  whatsappMensajeInicial: '¡Hola Delicias Belgi! Me gustaría hacer un pedido:',
  actualizadoEn: new Date().toISOString(),
};

export const DEFAULT_CONFIGURACION = INITIAL_CONFIGURACION;

export const INITIAL_PRODUCTOS: Producto[] = [];

export const INITIAL_INVENTARIO: InventarioItem[] = [];

export const INITIAL_VENTAS: Venta[] = [];


export const INITIAL_GASTOS: Gasto[] = [];
export const INITIAL_PRODUCCION: ProduccionRegistro[] = [];

export function seedInitialData() {
  try {
    localStorage.removeItem('delicias_belgi_productos');
    localStorage.removeItem('delicias_belgi_ventas');
    localStorage.removeItem('delicias_belgi_produccion');
    localStorage.removeItem('delicias_belgi_inventario');
    localStorage.removeItem('delicias_belgi_config');
    localStorage.removeItem('delicias_belgi_usuarios');
    localStorage.removeItem('delicias_belgi_deleted_ventas');
  } catch (e) {
    console.warn('Error clearing LocalStorage for seed:', e);
  }
}
