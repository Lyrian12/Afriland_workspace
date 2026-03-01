import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Merci de vous être inscrit(e) !
              </CardTitle>
              <CardDescription>Veuillez consulter votre boîte mail pour confirmer.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-green-500">
              Votre inscription a bien été prise en compte.
               Veuillez consulter votre boîte mail pour confirmer votre compte avant de vous connecter
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
