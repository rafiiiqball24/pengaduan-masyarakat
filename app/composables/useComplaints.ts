
export interface Complaint {
  id: string;
  date: string;
  status: 'Terkirim' | 'Diproses' | 'Ditangani' | 'Selesai' | 'Dibatalkan';
  content: string;
  location: string;
  images?: string[];
  file?: {
    name: string;
    size: string;
    type: 'pdf' | 'doc' | 'other';
    url: string;
  };
}

export const useComplaints = () => {
  const statuses = ['Terkirim', 'Diproses', 'Ditangani', 'Selesai', 'Dibatalkan'] as const;
  
  const generateComplaints = () => {
    const result: Complaint[] = [];
    let idCounter = 1;

    statuses.forEach(status => {
      // 1. Long Text Complaint
      result.push({
        id: String(idCounter++),
        date: 'Sen, 26/06/2025',
        status: status,
        content: `[${status}] Yorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.`,
        location: 'Jl. Pemuda No.17, Kota Semarang',
      });

      // 2. Complaint with File
      result.push({
        id: String(idCounter++),
        date: 'Sel, 27/06/2025',
        status: status,
        content: `[${status}] Laporan dengan lampiran dokumen pendukung. Mohon dicek untuk kelengkapan administrasi.`,
        location: 'Jl. Simpang Lima, Kota Semarang',
        file: {
          name: 'Dokumen_Pendukung.pdf',
          size: '2.4MB',
          type: 'pdf',
          url: '#',
        },
      });

      // 3. Complaint with Images
      result.push({
        id: String(idCounter++),
        date: 'Rab, 28/06/2025',
        status: status,
        content: `[${status}] Laporan dengan bukti foto kejadian di lapangan. Kondisi saat ini sangat membutuhkan penanganan segera.`,
        location: 'Jl. Pahlawan No.10, Kota Semarang',
        images: [
          'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=300',
          'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=300',
          'https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?auto=format&fit=crop&q=80&w=300',
        ],
      });
    });

    return result;
  };

  const complaints = ref<Complaint[]>(generateComplaints());

  return {
    complaints,
  };
};
