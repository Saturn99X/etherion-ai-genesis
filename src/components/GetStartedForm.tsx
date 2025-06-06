
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';

export default function GetStartedForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    nameAndRole: '',
    email: '',
    businessDescription: '',
    employeeCount: '',
    challenges: '',
    desiredOutcomes: '',
    urgencyScale: [5],
    currentSoftware: '',
    collaboration: '',
    aiExperience: '',
    callExpectations: '',
    specificQuestions: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUrgencyChange = (value: number[]) => {
    setFormData(prev => ({ ...prev, urgencyScale: value }));
  };

  const handleAiExperienceChange = (value: string) => {
    setFormData(prev => ({ ...prev, aiExperience: value }));
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsLoading(true);

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful submission
      setSuccess(true);
      // Reset form after success
      setFormData({
        companyName: '',
        nameAndRole: '',
        email: '',
        businessDescription: '',
        employeeCount: '',
        challenges: '',
        desiredOutcomes: '',
        urgencyScale: [5],
        currentSoftware: '',
        collaboration: '',
        aiExperience: '',
        callExpectations: '',
        specificQuestions: '',
      });
    } catch (err) {
      setError('Failed to submit the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Get Started with AI Solutions</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter your company name"
              required
            />
          </div>

          <div>
            <Label htmlFor="nameAndRole">Your Name & Role/Title</Label>
            <Input
              id="nameAndRole"
              name="nameAndRole"
              value={formData.nameAndRole}
              onChange={handleChange}
              placeholder="Enter your name and role/title"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Your Company/Private Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <Label htmlFor="businessDescription">Briefly describe your company's primary business/industry</Label>
            <Textarea
              id="businessDescription"
              name="businessDescription"
              value={formData.businessDescription}
              onChange={handleChange}
              placeholder="Describe your company's primary business and industry"
              required
              className="min-h-[100px]"
            />
          </div>

          <div>
            <Label htmlFor="employeeCount">Approximately how many employees are in your company</Label>
            <Input
              id="employeeCount"
              name="employeeCount"
              value={formData.employeeCount}
              onChange={handleChange}
              placeholder="e.g., 10-50, 100+, etc."
              required
            />
          </div>

          <div>
            <Label htmlFor="challenges">What are the top 2-3 biggest operational challenges, bottlenecks, or time-consuming areas your team currently faces?</Label>
            <Textarea
              id="challenges"
              name="challenges"
              value={formData.challenges}
              onChange={handleChange}
              placeholder="Describe your main operational challenges"
              required
              className="min-h-[120px]"
            />
          </div>

          <div>
            <Label htmlFor="desiredOutcomes">If you could wave a magic wand, what specific outcomes would you hope to achieve by integrating AI or improving your workflows?</Label>
            <Textarea
              id="desiredOutcomes"
              name="desiredOutcomes"
              value={formData.desiredOutcomes}
              onChange={handleChange}
              placeholder="e.g., Reduce task completion time by X%, Improve data accuracy, Increase customer satisfaction, Free up staff for more strategic work, etc."
              required
              className="min-h-[120px]"
            />
          </div>

          <div>
            <Label>On a scale of 1-10 (1=Not at all, 10=Extremely), how urgent is it for your business to address these challenges and improve productivity in this area?</Label>
            <div className="mt-4 mb-2">
              <Slider
                value={formData.urgencyScale}
                onValueChange={handleUrgencyChange}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>1 (Not at all)</span>
                <span className="font-medium">Current: {formData.urgencyScale[0]}</span>
                <span>10 (Extremely)</span>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="currentSoftware">What are the key software or platforms this department/team currently uses regularly for its core tasks?</Label>
            <Textarea
              id="currentSoftware"
              name="currentSoftware"
              value={formData.currentSoftware}
              onChange={handleChange}
              placeholder="e.g., CRM (specify which), Email (Outlook/Gmail), Slack/Teams, Project Management tools (specify), ERP (specify), specific industry software, spreadsheets, etc."
              required
              className="min-h-[100px]"
            />
          </div>

          <div>
            <Label htmlFor="collaboration">How does your team currently manage and share information or collaborate on projects within this department?</Label>
            <Textarea
              id="collaboration"
              name="collaboration"
              value={formData.collaboration}
              onChange={handleChange}
              placeholder="e.g., Shared drives, email, specific collaboration tools, regular meetings, etc."
              required
              className="min-h-[100px]"
            />
          </div>

          <div>
            <Label>Have you explored or implemented any AI tools or automation solutions in the past? If so, what were they, and what was your experience?</Label>
            <RadioGroup value={formData.aiExperience} onValueChange={handleAiExperienceChange} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="ai-yes" />
                <Label htmlFor="ai-yes">Yes, we have experience with AI tools/automation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="ai-no" />
                <Label htmlFor="ai-no">No, we haven't explored AI tools or automation yet</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="callExpectations">What are your main expectations from our upcoming call? What would make it a valuable use of your time?</Label>
            <Textarea
              id="callExpectations"
              name="callExpectations"
              value={formData.callExpectations}
              onChange={handleChange}
              placeholder="Describe what you hope to achieve from our call"
              required
              className="min-h-[100px]"
            />
          </div>

          <div>
            <Label htmlFor="specificQuestions">Are there any specific questions you already have for us that you'd like us to be prepared to discuss?</Label>
            <Textarea
              id="specificQuestions"
              name="specificQuestions"
              value={formData.specificQuestions}
              onChange={handleChange}
              placeholder="List any specific questions you have"
              className="min-h-[100px]"
            />
          </div>

          {success ? (
            <div className="flex flex-col items-center gap-4">
              <div className="text-green-500">✓</div>
              <p className="text-center text-green-500">Request submitted successfully!</p>
              <Button onClick={() => window.location.reload()}>
                Submit Another Request
              </Button>
            </div>
          ) : (
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit Request'}
            </Button>
          )}
          {error && (
            <div className="mt-4 p-4 bg-destructive/10 text-destructive rounded-md">
              {error}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
