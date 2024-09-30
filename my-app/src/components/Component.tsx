import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CloudIcon, DatabaseIcon, FolderIcon, HardDriveIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">欢迎来到 V0</h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          你可以通过{" "}
          <a
            href="https://v0.dev/chat"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://v0.dev/chat
          </a>{" "}
          访问 v0
        </p>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">资料存储选项</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CloudIcon className="mr-2" />
                云存储
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>安全可靠的云端存储解决方案，随时随地访问您的文件。</CardDescription>
              <Button className="mt-4">了解更多</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DatabaseIcon className="mr-2" />
                数据库
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>高性能数据库，适合存储和管理大量结构化数据。</CardDescription>
              <Button className="mt-4">了解更多</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FolderIcon className="mr-2" />
                文件系统
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>传统的文件系统存储，适合本地和网络存储需求。</CardDescription>
              <Button className="mt-4">了解更多</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HardDriveIcon className="mr-2" />
                对象存储
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>可扩展的对象存储，适合存储大量非结构化数据。</CardDescription>
              <Button className="mt-4">了解更多</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}