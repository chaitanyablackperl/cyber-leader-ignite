import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Clock, Award, Users, BookOpen, Briefcase, TrendingUp, Lock, GraduationCap, CheckCircle2 } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import drAnupKumarMaurya from "@/assets/dr-anup-kumar-maurya.jpg";
import vithalSukhathankar from "@/assets/vithal-sukhathankar.jpg";
import akshayBhosale from "@/assets/akshay-bhosale.jpg";
import archanChoudhary from "@/assets/archan-choudhary.jpg";
import rajSekhar from "@/assets/raj-sekhar.jpg";
import adityaPS from "@/assets/aditya-ps.jpg";
import certificateSample from "@/assets/certificate-sample.png";
import pearsonCertificate from "@/assets/pearson-certificate.jpg";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  contactNumber: z.string().trim().min(10, { message: "Contact number must be at least 10 digits" }).max(15, { message: "Contact number must be less than 15 digits" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

const Index = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactNumber: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setHasSubmittedForm(true);
    toast({
      title: "Application Submitted!",
      description: "Your brochure download will start shortly.",
    });
    form.reset();
    setIsDialogOpen(false);
    
    // Trigger brochure download after form submission
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/GIM-Advanced-CyberSecurity-Program-Brochure.pptx';
      link.download = 'GIM-Advanced-CyberSecurity-Program-Brochure.pptx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  const handleDownloadClick = () => {
    if (hasSubmittedForm) {
      // Allow direct download
      const link = document.createElement('a');
      link.href = '/GIM-Advanced-CyberSecurity-Program-Brochure.pptx';
      link.download = 'GIM-Advanced-CyberSecurity-Program-Brochure.pptx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Open application form first
      setIsDialogOpen(true);
      toast({
        title: "Application Required",
        description: "Please fill out the application form to download the brochure.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-bold text-foreground">GIM</h2>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#overview" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Overview</a>
            <a href="#program" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Program</a>
            <a href="#curriculum" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Curriculum</a>
            <a href="#faculty" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Faculty</a>
            <a href="#success" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Success Stories</a>
            <a href="#details" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Details</a>
          </nav>
          <Button onClick={() => setIsDialogOpen(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground">Apply Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0yaDJ2Mmgtdi0yem0wLTJ2Mmg2di0yaC02em0wIDBoLTJ2Mmgydi0yem0wLTJ2Mmg2di0yaC02em0wIDBoLTJ2Mmgydi0yem0wLTJ2Mmg2di0yaC02em0wIDBoLTJ2Mmgydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container relative px-4 md:px-8 py-20 md:py-32">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-4 py-1.5">
              Industry & Knowledge Partner - Blackperl DFIR
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Advanced Cybersecurity Programme for Leaders
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl">
              Master cybersecurity governance, AI-powered defense, and strategic leadership from one of India's top B-schools
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2.5 rounded-lg">
                <Clock className="h-5 w-5 text-accent" />
                <span className="font-medium">8-10 weeks</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2.5 rounded-lg">
                <Users className="h-5 w-5 text-accent" />
                <span className="font-medium">Online</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2.5 rounded-lg">
                <Award className="h-5 w-5 text-accent" />
                <span className="font-medium">GIM Certificate</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setIsDialogOpen(true)} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
                Apply Now
              </Button>
              <Button onClick={handleDownloadClick} size="lg" variant="outline" className="bg-white/95 border-2 border-white text-primary hover:bg-white hover:text-primary/90 font-bold whitespace-nowrap shadow-lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$292B</div>
              <p className="text-muted-foreground">Global cybersecurity market by 2028</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$4.45M</div>
              <p className="text-muted-foreground">Average cost of a data breach</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">51%</div>
              <p className="text-muted-foreground">Organizations increasing security investments</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <p className="text-muted-foreground">Practical, hands-on learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-background">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Programme Overview</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The global cybersecurity market is set to grow significantly—from $183 billion in 2024 to $292 billion by 2028—driven by a rising wave of cyber threats impacting critical systems and services around the world. As these threats grow in scale and complexity, there is a soaring need for skilled cybersecurity leaders who can detect, prevent, and respond to attacks effectively.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In response to this urgent need, GIM has partnered with BlackPerl to launch the Advanced Cybersecurity Program for Leaders, a forward-looking initiative designed to equip professionals with the skills to lead in this evolving landscape. The program integrates cutting-edge topics like Artificial Intelligence (AI) and Generative AI, enabling participants to strengthen their organization's cyber resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Program */}
      <section id="program" className="py-20 bg-secondary/20">
        <div className="container px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why This Programme?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Integrated with Generative AI</h3>
              <p className="text-muted-foreground">
                Learn how to leverage AI and Generative AI for smarter cybersecurity decision-making and threat detection.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Market-Driven Curriculum</h3>
              <p className="text-muted-foreground">
                Address the urgent skills gap with training aligned to industry needs and emerging cyber threats.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <GraduationCap className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Top B-School Excellence</h3>
              <p className="text-muted-foreground">
                Learn from GIM, one of India's premier business schools, combined with BlackPerl's industry expertise.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Learning Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Live Classes</h3>
                    <p className="text-muted-foreground">Instructor-led sessions provide the best learning experience with real-time interaction and guidance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lifetime Recording Access</h3>
                    <p className="text-muted-foreground">Re-watch any lesson or concept for deeper understanding at your own pace.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Co-Hort Based Learning</h3>
                    <p className="text-muted-foreground">Network and interact with peers through discussion boards and collaborative projects.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20">
                <Briefcase className="h-16 w-16 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">Focus on Practicals</h3>
                <p className="text-muted-foreground mb-6">
                  Don't just learn—apply your knowledge in real customer projects. The entire course emphasizes hands-on experience with 70% practical training.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Gain live project experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Work on real-world cybersecurity challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Learn by doing with industry practitioners</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section id="curriculum" className="py-20 bg-secondary/20">
        <div className="container px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Curriculum Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6">
              <Lock className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cybersecurity Governance</h3>
              <p className="text-sm text-muted-foreground">Learn frameworks and policies for organizational security leadership</p>
            </Card>
            <Card className="p-6">
              <Shield className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Risk & Compliance</h3>
              <p className="text-sm text-muted-foreground">Master risk assessment and regulatory compliance strategies</p>
            </Card>
            <Card className="p-6">
              <TrendingUp className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI for Cybersecurity</h3>
              <p className="text-sm text-muted-foreground">Leverage AI and GenAI for threat detection and response</p>
            </Card>
            <Card className="p-6">
              <Users className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Team Leadership</h3>
              <p className="text-sm text-muted-foreground">Build and lead high-performing cybersecurity teams</p>
            </Card>
            <Card className="p-6">
              <BookOpen className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Incident Response</h3>
              <p className="text-sm text-muted-foreground">Develop strategies for effective breach detection and response</p>
            </Card>
            <Card className="p-6">
              <Award className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Strategic Decision Making</h3>
              <p className="text-sm text-muted-foreground">Apply cutting-edge practices for business impact</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-20 bg-background">
        <div className="container px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Expert Faculty</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Learn from industry leaders and academic experts who bring decades of experience in cybersecurity, governance, and AI-driven defense strategies.
          </p>
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplayPlugin.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img src={drAnupKumarMaurya} alt="Dr. Anup Kumar Maurya" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Dr. Anup Kumar Maurya</h3>
                    <p className="text-sm text-accent mb-3">Associate Professor</p>
                    <p className="text-sm text-muted-foreground">
                      Ph.D from IDRBT
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img src={vithalSukhathankar} alt="Vithal S. Sukhathankar" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Vithal S. Sukhathankar</h3>
                    <p className="text-sm text-accent mb-3">Associate Professor</p>
                    <p className="text-sm text-muted-foreground">
                      Member of IT Council of GCCI
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img src={akshayBhosale} alt="Akshay Bhosale" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Akshay Bhosale</h3>
                    <p className="text-sm text-accent mb-3">Assistant Professor, Operations & Analytics</p>
                    <p className="text-sm text-muted-foreground">
                      Ph.D. from Industrial and Systems Engineering from IIT Kharagpur
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img src={archanChoudhary} alt="Archan Choudhary" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Archan Choudhary</h3>
                    <p className="text-sm text-accent mb-3">Founder & CEO Blackperl DFIR</p>
                    <p className="text-sm text-muted-foreground">
                      Ex-Amazon, Ex-Unilever<br />
                      Over 15+ Years Industry Experience
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img src={rajSekhar} alt="Raj Sekhar" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Raj Sekhar</h3>
                    <p className="text-sm text-accent mb-3">Co-Founder and CTO Blackperl DFIR</p>
                    <p className="text-sm text-muted-foreground">
                      Cyber Architect over<br />
                      16+ Years Industry Experience
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img src={adityaPS} alt="Aditya PS" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Aditya PS</h3>
                    <p className="text-sm text-accent mb-3">Founder & CEO Terraeagle</p>
                    <p className="text-sm text-muted-foreground">
                      Ex-CISO of Unisys With 20+ Years of Experience
                    </p>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-20 bg-secondary/20">
        <div className="container px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Success Stories</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Hear from our alumni who have transformed their careers and organizations through our program.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Elevated to CISO Role</h3>
                <p className="text-sm text-muted-foreground">Shlok Panchal</p>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "The program's blend of strategic governance and hands-on AI integration gave me the confidence to lead our organization's security transformation. Within 6 months, I was promoted to CISO."
              </p>
              <div className="flex items-center gap-2 text-sm text-accent">
                <CheckCircle2 className="h-4 w-4" />
                <span>Promoted to C-Suite</span>
              </div>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Built Enterprise Security Framework</h3>
                <p className="text-sm text-muted-foreground">Aditi Gadgil</p>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "The practical approach and real-world projects prepared me to architect and implement a comprehensive security framework for our 5000+ employee organization."
              </p>
              <div className="flex items-center gap-2 text-sm text-accent">
                <CheckCircle2 className="h-4 w-4" />
                <span>Led Major Security Initiative</span>
              </div>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Started Security Consulting Firm</h3>
                <p className="text-sm text-muted-foreground">Aniket Jhariya</p>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "The program's networking opportunities and industry connections helped me launch my own cybersecurity consulting practice. I now serve multiple Fortune 500 clients."
              </p>
              <div className="flex items-center gap-2 text-sm text-accent">
                <CheckCircle2 className="h-4 w-4" />
                <span>Entrepreneurial Success</span>
              </div>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Enhanced Incident Response Capabilities</h3>
                <p className="text-sm text-muted-foreground">Shruti Agarwal</p>
              </div>
              <p className="text-muted-foreground italic mb-4">
                "The AI-powered threat detection techniques I learned reduced our incident response time by 60%. The ROI was evident within the first quarter post-completion."
              </p>
              <div className="flex items-center gap-2 text-sm text-accent">
                <CheckCircle2 className="h-4 w-4" />
                <span>Measurable Business Impact</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="details" className="py-20 bg-background">
        <div className="container px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Programme Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="p-6 text-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Duration</h3>
              <p className="text-2xl font-bold text-foreground">8-10 Weeks</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Programme Fee</h3>
              <p className="text-lg font-bold text-foreground"><strong>Contact us for the cost of the program</strong></p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Learning Mode</h3>
              <p className="text-2xl font-bold text-foreground">Online</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Weekly Effort</h3>
              <p className="text-2xl font-bold text-foreground">8-10 Hours</p>
            </Card>
          </div>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Card className="p-6 bg-accent/10 border-accent/20">
              <p className="text-lg font-semibold text-foreground">
                Course starts in January 4th Week - 2026
              </p>
            </Card>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Eligibility & Certificate</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    Who Can Apply
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Any Graduate or Diploma Holder</li>
                    <li>• Business Leaders & C-Suite Executives</li>
                    <li>• Mid-Level Industry Practitioners</li>
                    <li>• Subject Matter Experts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    Certificate
                  </h4>
                  <p className="text-muted-foreground">
                    Upon successful completion, participants will receive a verified digital certificate from GIM & BlackPerl, recognized across the industry.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground">
        <div className="container px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Lead in Cybersecurity?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join the next cohort and transform your career with industry-leading expertise
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => setIsDialogOpen(true)} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Programme Completion Certificate</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Upon successful completion of the programme, you will receive certificates from Goa Institute of Management and Pearson. Participants will be getting a <strong>Global</strong> Certification from Pearson.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="bg-background rounded-lg shadow-xl p-4 md:p-8 flex-1 max-w-2xl">
                <img 
                  src={certificateSample} 
                  alt="GIM Advanced Cybersecurity Programme Certificate Sample" 
                  className="w-full h-auto rounded-lg border border-border"
                />
              </div>
              <div className="text-4xl font-bold text-accent">+</div>
              <div className="bg-background rounded-lg shadow-xl p-4 md:p-8 flex-1 max-w-2xl">
                <img 
                  src={pearsonCertificate} 
                  alt="Pearson Certificate Sample" 
                  className="w-full h-auto rounded-lg border border-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-center mb-12">
              Find answers to common questions about the programme
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who should attend this programme?</AccordionTrigger>
                <AccordionContent>
                  This programme is designed for senior management, CXOs, IT leaders, cybersecurity professionals, and business leaders who want to understand and implement strategic cybersecurity governance in their organizations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What are the eligibility criteria?</AccordionTrigger>
                <AccordionContent>
                  Participants should have a bachelor's degree and at least 5 years of professional experience. Prior knowledge of cybersecurity is helpful but not mandatory, as the programme covers both foundational and advanced concepts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What is the time commitment required?</AccordionTrigger>
                <AccordionContent>
                  The programme requires 6-8 hours per week over 8-10 weeks. This includes live sessions, self-paced learning, and project work. Sessions are scheduled to accommodate working professionals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Will I receive a certificate upon completion?</AccordionTrigger>
                <AccordionContent>
                  Yes, participants who successfully complete the programme will receive a Certificate from GIM in collaboration with Blackperl, along with a Global Pearson Certificate for course completion.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What is the learning mode?</AccordionTrigger>
                <AccordionContent>
                  The programme is delivered entirely online through live interactive sessions, recorded lectures, hands-on labs, and practical projects. You can access all materials through our learning platform.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>How is this programme different from other cybersecurity courses?</AccordionTrigger>
                <AccordionContent>
                  This programme uniquely combines strategic business leadership with technical cybersecurity expertise. It integrates AI-powered defense strategies, is taught by industry experts from both academia and leading cybersecurity firms, and focuses on practical, real-world applications with 70% hands-on training.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>What kind of projects will I work on?</AccordionTrigger>
                <AccordionContent>
                  You'll work on real-world cybersecurity challenges including incident response scenarios, security audits, AI-powered threat detection implementation, and developing comprehensive security strategies for organizations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>Is financial aid or installment options available?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer flexible payment options including installment plans. Please contact our admissions team for more details about financial assistance and payment schedules.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Apply for the Programme</DialogTitle>
            <DialogDescription>
              Fill in your details and we'll get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your contact number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us why you're interested in this programme" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Submit Application</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="py-12 bg-secondary/30 border-t border-border">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">GIM</h3>
              <p className="text-sm text-muted-foreground">
                Advanced Cybersecurity Programme for Leaders
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Phone: +91-9960197556<br />
                Email: cybersecurityonline@gim.ac.in
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Partners</h4>
              <p className="text-sm text-muted-foreground">
                Goa Institute of Management<br />
                BlackPerl DFIR
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 GIM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
