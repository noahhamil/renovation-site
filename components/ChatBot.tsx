"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface Message {
    id: string
    text: string
    sender: "user" | "bot"
    timestamp: Date
}

const INITIAL_MESSAGE: Message = {
    id: "1",
    text: "Bonjour ! Je suis l'assistant virtuel de Flash Services 78. Comment puis-je vous aider aujourd'hui ? (Devis, Services, Contact...)",
    sender: "bot",
    timestamp: new Date(),
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages, isTyping])

    const handleSend = async () => {
        if (!inputValue.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue("")
        setIsTyping(true)

        // Simulate bot thinking time
        setTimeout(() => {
            const botResponse = generateResponse(userMessage.text)
            setMessages((prev) => [...prev, botResponse])
            setIsTyping(false)
        }, 1500)
    }

    const generateResponse = (text: string): Message => {
        const lowerText = text.toLowerCase()
        let responseText = ""

        if (lowerText.includes("devis") || lowerText.includes("prix") || lowerText.includes("coût")) {
            responseText = "Pour obtenir un devis personnalisé, vous pouvez utiliser notre formulaire en ligne ou nous appeler directement au 06.10.17.11.05. Souhaitez-vous le lien vers le formulaire ?"
        } else if (lowerText.includes("contact") || lowerText.includes("téléphone") || lowerText.includes("email")) {
            responseText = "Vous pouvez nous joindre au 06.10.17.11.05 ou par email. Nous sommes disponibles pour répondre à toutes vos questions."
        } else if (lowerText.includes("service") || lowerText.includes("prestation")) {
            responseText = "Nous proposons des services de rénovation complète : isolation, plomberie, électricité, peinture, et bien plus encore."
        } else if (lowerText.includes("bonjour") || lowerText.includes("salut") || lowerText.includes("hello")) {
            responseText = "Bonjour ! Comment puis-je vous aider dans votre projet de rénovation ?"
        } else {
            responseText = "Je ne suis pas sûr de comprendre. Pouvez-vous préciser votre demande ? Vous pouvez me demander des infos sur nos devis, services ou contacts."
        }

        return {
            id: (Date.now() + 1).toString(),
            text: responseText,
            sender: "bot",
            timestamp: new Date(),
        }
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-8 sm:right-8">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[350px] overflow-hidden rounded-2xl border bg-background shadow-2xl sm:w-[380px]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between bg-primary p-4 text-primary-foreground">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm">
                                    <Bot className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Assistant Flash Services</h3>
                                    <p className="text-xs opacity-90">En ligne</p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Messages */}
                        <div className="h-[400px] bg-muted/30 p-4">
                            <ScrollArea className="h-full pr-4">
                                <div className="flex flex-col gap-4">
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={cn(
                                                "flex w-max max-w-[80%] flex-col gap-1 rounded-2xl px-4 py-2 text-sm",
                                                message.sender === "user"
                                                    ? "self-end bg-primary text-primary-foreground"
                                                    : "self-start bg-muted shadow-sm"
                                            )}
                                        >
                                            {message.text}
                                            <span className={cn(
                                                "text-[10px] opacity-70",
                                                message.sender === "user" ? "text-primary-foreground" : "text-muted-foreground"
                                            )}>
                                                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex w-max max-w-[80%] items-center gap-2 self-start rounded-2xl bg-muted px-4 py-3 shadow-sm">
                                            <div className="flex gap-1">
                                                <span className="h-2 w-2 animate-bounce rounded-full bg-primary/40 [animation-delay:-0.3s]"></span>
                                                <span className="h-2 w-2 animate-bounce rounded-full bg-primary/40 [animation-delay:-0.15s]"></span>
                                                <span className="h-2 w-2 animate-bounce rounded-full bg-primary/40"></span>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={scrollRef} />
                                </div>
                            </ScrollArea>
                        </div>

                        {/* Input */}
                        <div className="border-t bg-background p-4">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    handleSend()
                                }}
                                className="flex gap-2"
                            >
                                <Input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Écrivez votre message..."
                                    className="rounded-full bg-muted/50 focus-visible:ring-primary"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                                    disabled={!inputValue.trim() || isTyping}
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="lg"
                className={cn(
                    "h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
                    isOpen
                        ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="h-6 w-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="message"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle className="h-7 w-7" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Button>
        </div>
    )
}
