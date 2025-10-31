import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Shield, Clock, Award, Users, BookOpen, Briefcase, TrendingUp, Lock, GraduationCap, CheckCircle2 } from "lucide-react";
import drAjitParulekar from "@/assets/dr-ajit-parulekar.png";
import vithalSukhathankar from "@/assets/vithal-sukhathankar.jpg";
import akshayBhosale from "@/assets/akshay-bhosale.jpg";

const Index = () => {
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
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Apply Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0yaDJ2Mmgtdi0yem0wLTJ2Mmg2di0yaC02em0wIDBoLTJ2Mmgydi0yem0wLTJ2Mmg2di0yaC02em0wIDBoLTJ2Mmgydi0yem0wLTJ2Mmg2di0yaC02em0wIDBoLTJ2Mmgydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container relative px-4 md:px-8 py-20 md:py-32">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-4 py-1.5">
              Technological Partner - BlackPerl DFIR
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
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img src={drAjitParulekar} alt="Dr. Ajit Parulekar" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Dr. Ajit Parulekar</h3>
                    <p className="text-sm text-accent mb-3">Director of GIM</p>
                    <p className="text-sm text-muted-foreground">
                      Visiting Faculty of ISCTE Business School in Portugal.
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
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                      <Lock className="h-12 w-12 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Dr. Faculty Name 4</h3>
                    <p className="text-sm text-accent mb-3">AI & Security Researcher</p>
                    <p className="text-sm text-muted-foreground">
                      Leading researcher in AI-powered threat detection and machine learning for cybersecurity.
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                      <Award className="h-12 w-12 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Expert Name 5</h3>
                    <p className="text-sm text-accent mb-3">Compliance & Risk Advisor</p>
                    <p className="text-sm text-muted-foreground">
                      Specialist in regulatory compliance, risk management, and cybersecurity frameworks (ISO, NIST).
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                      <Briefcase className="h-12 w-12 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Industry Leader 6</h3>
                    <p className="text-sm text-accent mb-3">Cybersecurity Strategist</p>
                    <p className="text-sm text-muted-foreground">
                      Strategic advisor to C-suite executives on digital transformation and security investments.
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="h-12 w-12 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Expert Name 7</h3>
                    <p className="text-sm text-accent mb-3">Penetration Testing Expert</p>
                    <p className="text-sm text-muted-foreground">
                      Ethical hacker and penetration testing specialist with hands-on experience in vulnerability assessment.
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
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Elevated to CISO Role</h3>
                  <p className="text-sm text-muted-foreground">Senior IT Manager</p>
                </div>
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
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Built Enterprise Security Framework</h3>
                  <p className="text-sm text-muted-foreground">IT Security Lead</p>
                </div>
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
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Started Security Consulting Firm</h3>
                  <p className="text-sm text-muted-foreground">Former Security Analyst</p>
                </div>
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
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Enhanced Incident Response Capabilities</h3>
                  <p className="text-sm text-muted-foreground">Security Operations Manager</p>
                </div>
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
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Investment</h3>
              <p className="text-2xl font-bold text-foreground">₹80,000 + GST</p>
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
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

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
                For inquiries about the program,<br />
                please contact our admissions team.
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
