
import React from 'react';
import { useForm } from 'react-hook-form';
import { CalendarIcon, Info } from 'lucide-react';
import { format } from 'date-fns';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';

const formSchema = z.object({
  // Data Pemesan
  nama: z.string().min(1, { message: "Nama wajib diisi" }),
  nomorHandphone: z.string().min(1, { message: "Nomor handphone wajib diisi" }),
  email: z.string().email({ message: "Email tidak valid" }),
  
  // Data Mobil
  merk: z.string().min(1, { message: "Merk mobil wajib diisi" }),
  model: z.string().min(1, { message: "Model mobil wajib diisi" }),
  tipe: z.string().min(1, { message: "Tipe mobil wajib diisi" }),
  tahun: z.string().min(1, { message: "Tahun mobil wajib diisi" }),
  warna: z.string().min(1, { message: "Warna mobil wajib diisi" }),
  
  // Lokasi dan Waktu
  kota: z.string().min(1, { message: "Kota wajib diisi" }),
  tanggalInspeksi: z.date({
    required_error: "Tanggal inspeksi wajib diisi",
  }),
  
  // Additional notes
  catatan: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const BookingInspeksiPage: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: "",
      nomorHandphone: "",
      email: "",
      merk: "",
      model: "",
      tipe: "",
      tahun: "",
      warna: "",
      kota: "",
      catatan: "",
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted with data:", data);
    toast.success("Booking berhasil dikirim! Tim kami akan menghubungi Anda segera.", {
      description: "Detail pembayaran akan dikonfirmasi oleh Customer Service kami melalui kontak yang Anda berikan."
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <div className="container mx-auto py-12 px-4 flex-grow">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Inspeksi</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Isi formulir di bawah untuk memesan layanan inspeksi mobil kami. Tim kami akan menghubungi Anda untuk mengkonfirmasi jadwal dan pembayaran.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Formulir Booking Inspeksi</CardTitle>
            <CardDescription>
              Silakan lengkapi semua informasi yang diperlukan untuk menjadwalkan inspeksi mobil Anda.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Data Pemesan Section */}
                <div className="space-y-4">
                  <div className="font-medium text-lg text-gray-900 flex items-center gap-2 pb-2 border-b">
                    <User className="h-5 w-5 text-automotive-600" />
                    Data Pemesan
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="nama"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nama Lengkap</FormLabel>
                          <FormControl>
                            <Input placeholder="Masukkan nama lengkap Anda" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="nomorHandphone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nomor Handphone</FormLabel>
                          <FormControl>
                            <Input placeholder="Contoh: 08123456789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="nama@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Data Mobil Section */}
                <div className="space-y-4">
                  <div className="font-medium text-lg text-gray-900 flex items-center gap-2 pb-2 border-b">
                    <Car className="h-5 w-5 text-automotive-600" />
                    Data Mobil Yang Akan Di Inspeksi
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="merk"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Merk</FormLabel>
                          <FormControl>
                            <Input placeholder="Contoh: Toyota, Honda, BMW" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="model"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Model</FormLabel>
                          <FormControl>
                            <Input placeholder="Contoh: Avanza, Civic, X5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="tipe"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipe</FormLabel>
                          <FormControl>
                            <Input placeholder="Contoh: G, E, 2.0" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tahun"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tahun</FormLabel>
                          <FormControl>
                            <Input placeholder="Contoh: 2018" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="warna"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Warna</FormLabel>
                          <FormControl>
                            <Input placeholder="Contoh: Putih, Hitam" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Lokasi dan Waktu Section */}
                <div className="space-y-4">
                  <div className="font-medium text-lg text-gray-900 flex items-center gap-2 pb-2 border-b">
                    <MapPin className="h-5 w-5 text-automotive-600" />
                    Lokasi dan Waktu
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="kota"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kota</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih kota" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Jakarta">Jakarta</SelectItem>
                            <SelectItem value="Depok">Depok</SelectItem>
                            <SelectItem value="Bogor">Bogor</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Saat ini kami hanya melayani area Jakarta, Depok, dan Bogor
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="tanggalInspeksi"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Tanggal Inspeksi</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd MMMM yyyy")
                                ) : (
                                  <span>Pilih tanggal</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormDescription>
                          *Tanggal inspeksi dapat berubah, tergantung ketersediaan jadwal dari kami dan pemilik mobil
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Additional Notes */}
                <FormField
                  control={form.control}
                  name="catatan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Catatan Tambahan (Opsional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Informasi tambahan yang perlu kami ketahui"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Payment Information Note */}
                <div className="rounded-lg border p-4 bg-blue-50">
                  <div className="flex gap-2 items-start">
                    <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Detail Pembayaran</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Detail pembayaran akan dikonfirmasi oleh Customer Service kami melalui kontak yang Anda berikan. 
                        Pembayaran dapat dilakukan setelah konfirmasi jadwal.
                      </p>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-automotive-600 hover:bg-automotive-700">
                  Kirim Booking
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default BookingInspeksiPage;
