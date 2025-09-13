"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MessageSquare, Reply, Archive, Trash2, Mail, MailOpen } from "lucide-react"

const mockMessages = [
  {
    id: 1,
    sender: "Maria Santos",
    email: "maria@email.com",
    subject: "Request for Business Permit",
    message: "I would like to inquire about the requirements for a business permit...",
    status: "Unread",
    priority: "High",
    date: "2024-01-15 10:30 AM",
  },
  {
    id: 2,
    sender: "John Cruz",
    email: "john@email.com",
    subject: "Road Repair Request",
    message: "There's a pothole on Main Street that needs immediate attention...",
    status: "Read",
    priority: "Medium",
    date: "2024-01-14 2:15 PM",
  },
  {
    id: 3,
    sender: "Ana Reyes",
    email: "ana@email.com",
    subject: "Community Event Proposal",
    message: "I would like to propose organizing a community clean-up drive...",
    status: "Replied",
    priority: "Low",
    date: "2024-01-13 9:45 AM",
  },
]

export default function MessagesPage() {
  const [messages, setMessages] = useState(mockMessages)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null)

  const filteredMessages = messages.filter(
    (message) =>
      message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Messages</h1>
          <p className="text-muted-foreground">Manage citizen inquiries and communications</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Archive className="h-4 w-4 mr-2" />
            Archive
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Inbox
              </CardTitle>
              <CardDescription>Citizen messages and inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                {filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedMessage === message.id ? "bg-accent" : "hover:bg-accent/50"
                    }`}
                    onClick={() => setSelectedMessage(message.id)}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        {message.status === "Unread" ? (
                          <Mail className="h-4 w-4 text-primary" />
                        ) : (
                          <MailOpen className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="font-semibold text-sm">{message.sender}</span>
                      </div>
                      <Badge
                        variant={
                          message.priority === "High"
                            ? "destructive"
                            : message.priority === "Medium"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {message.priority}
                      </Badge>
                    </div>
                    <h4 className="font-medium text-sm mb-1">{message.subject}</h4>
                    <p className="text-xs text-muted-foreground truncate">{message.message}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-muted-foreground">{message.date}</span>
                      <Badge variant="outline" className="text-xs">
                        {message.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {selectedMessage ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{filteredMessages.find((m) => m.id === selectedMessage)?.subject}</CardTitle>
                    <CardDescription>
                      From: {filteredMessages.find((m) => m.id === selectedMessage)?.sender}(
                      {filteredMessages.find((m) => m.id === selectedMessage)?.email})
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Reply className="h-3 w-3 mr-1" />
                      Reply
                    </Button>
                    <Button variant="outline" size="sm">
                      <Archive className="h-3 w-3 mr-1" />
                      Archive
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Received: {filteredMessages.find((m) => m.id === selectedMessage)?.date}
                  </div>
                  <div className="prose max-w-none">
                    <p>{filteredMessages.find((m) => m.id === selectedMessage)?.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-64">
                <div className="text-center text-muted-foreground">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Select a message to view its content</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
